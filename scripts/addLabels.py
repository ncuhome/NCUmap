

def addLabel(file,old_str):
    file_data = ""
    preLine = ''
    with open(file, "r", encoding="utf-8") as f:
        for line in f:
            
            if old_str in line and '<group' not in preLine and '<group' not in line:
            # if line.startswith(old_str):
                file_data += line
                file_data += "          children={<Label text='"+(line.strip())[6:-1]+"'></Label>}\n"
                print(line)
            else:
                file_data += line
            preLine = line
    with open(file,"w",encoding="utf-8") as f:
        f.write(file_data)
 
addLabel('src/Map.tsx', "name=")


