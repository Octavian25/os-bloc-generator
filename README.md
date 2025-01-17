
# os-bloc-generator

**os-bloc-generator** adalah extension Visual Studio Code yang memungkinkan Anda untuk dengan mudah menghasilkan file BLoC (Business Logic Component) untuk proyek Flutter Anda. Extension ini mendukung pembuatan template untuk BLoC standar dan BLoC endless.

---

## 📦 Fitur

- **Generate BLoC Standard**:
  - Membuat file BLoC, Event, dan State berdasarkan nama yang Anda masukkan.
  - File tersimpan dalam folder dengan suffix `_bloc`.

- **Generate BLoC Endless**:
  - Membuat file BLoC dengan state yang mendukung pagination dan handling loading states.

---

## 🚀 Instalasi

### 1. Dari VSIX
1. Unduh file [os-bloc-generator-0.0.1.vsix](./os-bloc-generator-0.0.1.vsix) dari repositori ini.
2. Buka Visual Studio Code.
3. Pergi ke panel **Extensions** (**Ctrl+Shift+X** di Windows/Linux, **Cmd+Shift+X** di macOS).
4. Klik ikon **tiga titik** di pojok kanan atas dan pilih **Install from VSIX...**.
5. Pilih file `os-bloc-generator-0.0.1.vsix` yang sudah diunduh.

---

## 🛠️ Cara Penggunaan

### 1. Generate BLoC Standard
1. Klik kanan pada folder di **Explorer**.
2. Pilih **OSBLoC : New Bloc**.
3. Masukkan nama BLoC di input box (contoh: `example`).
4. Folder `example_bloc` akan dibuat, dengan file:
   - `example_bloc.dart`
   - `example_event.dart`
   - `example_state.dart`

### 2. Generate BLoC Endless
1. Klik kanan pada folder di **Explorer**.
2. Pilih **OSBLoC : New Bloc Endless**.
3. Masukkan nama BLoC di input box (contoh: `example`).
4. Folder `example_bloc` akan dibuat, dengan file:
   - `example_bloc.dart`
   - `example_event.dart`
   - `example_state.dart` (dengan state tambahan untuk pagination dan error handling).

---

## 💻 Kontribusi

Kami menyambut kontribusi dari siapa saja! Jika Anda menemukan bug atau memiliki saran, silakan buka **Issues** atau ajukan **Pull Request**.

### Langkah untuk Berkontribusi:
1. Fork repositori ini.
2. Clone fork Anda:
   ```bash
   git clone https://github.com/username/os-bloc-generator.git
   ```
3. Buat branch baru:
   ```bash
   git checkout -b fitur-baru
   ```
4. Lakukan perubahan, commit, dan push:
   ```bash
   git commit -m "Menambahkan fitur baru"
   git push origin fitur-baru
   ```
5. Buka Pull Request.

---

## 📝 Lisensi

Project ini dilisensikan di bawah [MIT License](./LICENSE.md). Silakan lihat file `LICENSE.md` untuk detail lebih lanjut.

---

## 📫 Kontak

Jika Anda memiliki pertanyaan, silakan hubungi melalui:

- **Email**: [octavian.publik@gmail.com](mailto:octavian.publik@gmail.com)
- **GitHub Issues**: [Issues](https://github.com/Octavian25/os-bloc-generator/issues)
