import os

def describe_directory(path, indentation="", file_path=None):
    if not os.path.exists(path):
        print(f"{path} não encontrado.")
        return

    if os.path.isdir(path):
        print(f"{indentation}+ {os.path.basename(path)}")
        indentation += "  "
        for item in os.listdir(path):
            item_path = os.path.join(path, item)
            if os.path.isdir(item_path):
                describe_directory(item_path, indentation)
                if file_path is not None:
                    with open(file_path, "a") as f:
                        f.write(indentation + os.path.basename(item_path) + "\n")

path = r"C:/Users/Emanuel Menezes/Documents/Projetos/chat-online"
file_path = os.path.join(path, "directory_structure.txt")
if os.path.exists(file_path):
    os.remove(file_path)
describe_directory(path, file_path=file_path)
