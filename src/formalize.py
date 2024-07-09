import os

def importStyle():
    current_directory = os.path.dirname(os.path.abspath(__file__))
    pages_dir = os.path.join(current_directory, 'pages')

    for root, dirs, files in os.walk(pages_dir):
        for file in files:
            if file == 'index.js':
                path = os.path.join(root, file)
                # 读取原文件内容
                with open(path, 'r') as f:
                    content = f.read()
                # 在开头添加新内容
                new_content = "import styles from './styles.module.css';\n" + content
                # 写入新内容
                with open(path, 'w') as f:
                    f.write(new_content)

if __name__ == "__main__":
    importStyle()