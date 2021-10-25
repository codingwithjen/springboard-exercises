# Terminal Exercises
Write the following terminal commands to perform the following taks:

### Part 1
1. **Make a directory called** *first*:
```
mkdir first
```

2. **Change directory to the FIRST folder**:
```
cd first
```

3. **Create a file called person.txt**:
```
touch person.txt
```

4. **Change the name of person.txt to another.txt**:
```
mv person.txt another.txt
```

5. **Make a copy of the another.txt file and call it copy.txt**:
```
cp another.txt copy.txt
```

6. **Remove the copy.txt file**:
```
rm copy.txt
```

7. **Make a copy of the first folder and call it second**:
```
cp -r first second
```

8. **Delete the second folder**:
```
rm -rf second
```

### Part II
1. **What does the man command do? Type in man rm. How do you scroll and get out?**
```
The "man rm" takes us to the general commands manual. -D takes you to half a page; -B makes you go back one page; -U go back half a page; "q" to exit out properly.
```

2. **Look at the man page for ls. What does the -l flag do? What does the -a flag do?**
```
The "-l" flag lists files in a list format with more detail and the "-a" flag lists all files and folders including hidden files.
```

3. **How do you jump between words in the terminal?**
```
Option left/right
```

4. **How do you get to the end of a line in terminal?**
```
Command/Control + e
```
5. **How do you move your cursor to the beginning of the terminal?**
```
Command/Control + a
```

6. **How do you delete a word (without pressing backspace multiple times) in the terminal**
```
Option + delete
```

7. **What is the difference between a terminal and shell?**
```
Terminal is an application that gives us a command line interface to interact with the computer. It refers to a wrapper program which runs a shell. The shell is the program which actually processes commands and returns output. Most shells also manage foreground and background processes, command history, and command line editing.
```

8. **What is an absolute path?**
```
An absolute path is a path that starts from the root route and gives the complete location for a file or folder.
```

9. **What is a relative path?**
```
A relative path is a path that starts at the current location and not the root route.
```

10. **What is a flag? Give three examples of flags you have used.**
```
Flags can change and even enhance commands and are added using a "-" after the command. We can pass "-a" flag to list all files (including hidden files and folders) or if we want the ls command to give us more information about each file, we can pass in the "-l" flag. Using flags for ls will be essential when working with permissions, as well as when you start working with git. to combine flags, we just use one "-". For example, type "ls -la" to show all files and more detailed information about each directory.
```

11. **What do the r and f flags do with the rm command?**
```
r removes folders and it will repeatedly go through each folder and file, while f will force remove folders with files still stored in them.
```