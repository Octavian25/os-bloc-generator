const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

// Fungsi untuk mengubah string menjadi snake_case
function toSnakeCase(str) {
  return str.toLowerCase().replace(/\s+/g, "_");
}

// Fungsi untuk mengubah string menjadi PascalCase
function toPascalCase(str) {
  return str.replace(/(^\w|_\w)/g, (match) =>
    match.replace("_", "").toUpperCase()
  );
}

function generateBlocFile(blocName, dirPath) {
  const snakeCaseBlocName = toSnakeCase(blocName);
  const folderName = `${snakeCaseBlocName}_bloc`;
  const pascalCaseBlocName = toPascalCase(snakeCaseBlocName);
  const blocTemplate = `
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part '${snakeCaseBlocName}_event.dart';
part '${snakeCaseBlocName}_state.dart';

class ${pascalCaseBlocName}Bloc extends Bloc<${pascalCaseBlocName}Event, ${pascalCaseBlocName}State> {
  //TODO : add your usecase here
  ${pascalCaseBlocName}Bloc(this.) : super(${pascalCaseBlocName}Initial()) {
    on<Do${pascalCaseBlocName}>((event, emit) async {
      emit(${pascalCaseBlocName}Loading());
    //TODO : change with your_usecase
      var response = await your_usecase.execute();
      response.fold((l) {
      emit(${pascalCaseBlocName}Failure(l.message));
      }, (r){
      emit(${pascalCaseBlocName}Success(r));
      });
    });
  }
}

`;

  const eventTemplate = `
part of '${snakeCaseBlocName}_bloc.dart';

abstract class ${pascalCaseBlocName}Event {}

class Do${pascalCaseBlocName} extends ${pascalCaseBlocName}Event {}
`;

  const stateTemplate = `
part of '${snakeCaseBlocName}_bloc.dart';

@immutable
sealed class ${pascalCaseBlocName}State {}

final class ${pascalCaseBlocName}Initial extends ${pascalCaseBlocName}State {}

class ${pascalCaseBlocName}Loading extends ${pascalCaseBlocName}State {}

class ${pascalCaseBlocName}Success extends ${pascalCaseBlocName}State {
  final List<String> datas;
  ${pascalCaseBlocName}Success(this.datas);
}

class ${pascalCaseBlocName}Failure extends ${pascalCaseBlocName}State {
  final String message;
  ${pascalCaseBlocName}Failure(this.message);
}

`;

  try {
    const blocDirPath = path.join(dirPath, folderName);
    if (!fs.existsSync(blocDirPath)) {
      fs.mkdirSync(blocDirPath);
    }

    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_bloc.dart`),
      blocTemplate
    );
    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_event.dart`),
      eventTemplate
    );
    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_state.dart`),
      stateTemplate
    );
    vscode.window.showInformationMessage(
      `BLoC files for ${blocName} created successfully!`
    );
  } catch (error) {
    vscode.window.showErrorMessage(
      `Failed to create BLoC files: ${error.message}`
    );
  }
}

function generateBlocEndlessFile(blocName, dirPath) {
  const snakeCaseBlocName = toSnakeCase(blocName);
  const folderName = `${snakeCaseBlocName}_bloc`;
  const pascalCaseBlocName = toPascalCase(snakeCaseBlocName);
  const blocTemplate = `
import 'package:bloc/bloc.dart';
import 'package:meta/meta.dart';

part '${snakeCaseBlocName}_event.dart';
part '${snakeCaseBlocName}_state.dart';

class ${pascalCaseBlocName}Bloc extends Bloc<${pascalCaseBlocName}Event, ${pascalCaseBlocName}State> {
  //TODO : add your usecase here
  ${pascalCaseBlocName}Bloc(this.) : super(${pascalCaseBlocName}State()) {
    on<Do${pascalCaseBlocName}>((event, emit) async {
    emit(state.copyWith(isError: false, errorMessage: "", isLoading: false));
    //TODO : change with your_usecase
      var response = await your_usecase.execute();
      response.fold((l) {
      emit(state.copyWith(isError: true, errorMessage: l.message, isLoading: false));
      }, (r){
      emit(state.copyWith(isError: false, errorMessage: "", isLoading: false, datas: r));
      });
    });
  }
}

`;

  const eventTemplate = `
part of '${snakeCaseBlocName}_bloc.dart';

abstract class ${pascalCaseBlocName}Event {}

class Do${pascalCaseBlocName} extends ${pascalCaseBlocName}Event {}
`;

  const stateTemplate = `
part of '${snakeCaseBlocName}_bloc.dart';

@immutable
class ${pascalCaseBlocName}State {
 final bool isLoading;
  final bool isError;
  final String errorMessage;
  final bool reachMax;
  final int currentPage;
  final List<String> datas;

  const ${pascalCaseBlocName}State(
      {this.datas = const [],
      this.isLoading = false,
      this.isError = false,
      this.reachMax = false,
      this.errorMessage = "",
      this.currentPage = 1});

  ${pascalCaseBlocName}State copyWith({
    bool? isLoading,
    bool? isError,
    String? errorMessage,
    bool? reachMax,
    int? currentPage,
    List<String>? datas,
  }) =>
      ${pascalCaseBlocName}State(
          isLoading: isLoading ?? this.isLoading,
          isError: isError ?? this.isError,
          errorMessage: errorMessage ?? this.errorMessage,
          reachMax: reachMax ?? this.reachMax,
          currentPage: currentPage ?? this.currentPage,
          datas: datas ?? this.datas);
}

`;

  try {
    const blocDirPath = path.join(dirPath, folderName);
    if (!fs.existsSync(blocDirPath)) {
      fs.mkdirSync(blocDirPath);
    }

    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_bloc.dart`),
      blocTemplate
    );
    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_event.dart`),
      eventTemplate
    );
    fs.writeFileSync(
      path.join(blocDirPath, `${snakeCaseBlocName}_state.dart`),
      stateTemplate
    );
    vscode.window.showInformationMessage(
      `BLoC files for ${blocName} created successfully!`
    );
  } catch (error) {
    vscode.window.showErrorMessage(
      `Failed to create BLoC files: ${error.message}`
    );
  }
}

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.generateBloc",
    async (uri) => {
      if (!uri || !uri.fsPath) {
        vscode.window.showErrorMessage(
          "Please select a folder to generate the BLoC files."
        );
        return;
      }
      const blocName = await vscode.window.showInputBox({
        prompt: "Enter the name of the BLoC",
      });

      if (blocName) {
        if (!blocName || !blocName.match(/^[a-zA-Z0-9_]+$/)) {
          vscode.window.showErrorMessage(
            "Invalid BLoC name. Only letters, numbers, and underscores are allowed."
          );
          return;
        }
        generateBlocFile(blocName, uri.fsPath);
        vscode.window.showInformationMessage(
          `BLoC files for ${blocName} created successfully in ${blocDirPath}!`
        );
      }
    }
  );
  let disposableEndless = vscode.commands.registerCommand(
    "extension.generateBlocEndless",
    async (uri) => {
      if (!uri || !uri.fsPath) {
        vscode.window.showErrorMessage(
          "Please select a folder to generate the BLoC files."
        );
        return;
      }
      const blocName = await vscode.window.showInputBox({
        prompt: "Enter the name of the BLoC",
      });

      if (blocName) {
        if (!blocName || !blocName.match(/^[a-zA-Z0-9_]+$/)) {
          vscode.window.showErrorMessage(
            "Invalid BLoC name. Only letters, numbers, and underscores are allowed."
          );
          return;
        }
        generateBlocEndlessFile(blocName, uri.fsPath);
        vscode.window.showInformationMessage(
          `BLoC files for ${blocName} created successfully in ${blocDirPath}!`
        );
      }
    }
  );
  context.subscriptions.push(disposable);
  context.subscriptions.push(disposableEndless);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
