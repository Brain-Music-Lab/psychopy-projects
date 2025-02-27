# Brain Music Lab Psychopy Projects
Brain Music Lab PsychoPy Projects for the Brain Music Lab Data Station

# Description of Current Projects
## PsychoPy Test
Place holder project for testing in initial development. Will be removed.

# Adding a Project
## Tasks on the PsychoPy Projects Repo (This One!)
- Create a branch in this repository with the same name as your PsychoPy project. If you are unable to create a branch, you need to request edit permissions.
- On that branch, place all pertinent files into a folder named the same thing as your project. 
    - Replace spaces with hyphens. 
    - Make all letters lowercase. 
    - Remove any punctuation.
    - Example:
        - Project name: Lab's Great Psychopy Project
        - Folder name: labs-great-psychopy-project
- Update the README.md file with information about your project.
- Commit the edits and push to the remote repository on your branch.
- Make a pull request to merge your branch into main. 

## Tasks on the [Data Station](https://github.com/Brain-Music-Lab/ListenerFacingDesign/tree/add-psychopy-submodule) Repository
- Make a branch in that repository
- Add and commit the psychopy projects folder.
- Push to remote. If you are unable to create a branch or push changes, please request edit permissions.
- Make a pull request to merge your branch into develop.

## Tasks Summary
- In the PsychoPy Projects repository
    - `cd psychopy-projects`
    - `git checkout -b <YOUR BRANCH NAME> main`
    - Add your project folder
    - Update the README.md with details about your project.
    - `git add <YOUR FOLDER NAME> README.md`
    - `git commit -m "Added new project: <YOUR PROJECT NAME>"`
    - `git push --set-upstream origin <BRANCH NAME>`
    - Make pull request
- In the Data Station repository
    - `cd ListenerFacingDesign`
    - `git checkout -b <BRANCH NAME> main`
    - `git add psychopy-projects`
    - `git commit -m <COMMIT MESSAGE>`
    - `git push --set-upstream origin <BRANCH NAME>`
    