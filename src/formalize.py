import os
import shutil

def organize_files(root_dir):
  pages_dir = os.path.join(root_dir, 'pages')
  styles_dir = os.path.join(root_dir,'styles')

  for js_file in os.listdir(pages_dir):
    if js_file.endswith('.js'):
      file_base_name = os.path.splitext(js_file)[0]
      new_dir = os.path.join(pages_dir, file_base_name)
      os.makedirs(new_dir, exist_ok=True)

      old_js_path = os.path.join(pages_dir, js_file)
      new_js_path = os.path.join(new_dir, 'index.js')
      shutil.move(old_js_path, new_js_path)

      css_file_name = f'{file_base_name}.module.css'
      old_css_path = os.path.join(styles_dir, css_file_name)
      new_css_path = os.path.join(new_dir, 'styles.css')

      if os.path.exists(old_css_path):
        shutil.move(old_css_path, new_css_path)
      else:
        print(f"Warning: CSS file for {file_base_name} not found in {styles_dir}")

if __name__ == "__main__":
    root_directory = '/src'
    organize_files(root_directory)
