# Brain Music Lab Psychopy Projects
Brain Music Lab PsychoPy Projects for the Brain Music Lab Data Station

# Description of Current Projects
## PsychoPy Test
Place holder project for testing in initial development. Will be removed.

# Adding a Project
- Create a branch on this repository with the same name as your PsychoPy project. If you are unable to create a branch, you need to request edit permissions.
- On that branch place all pertinent files into a folder named the same thing as your project. 
    - Replace spaces with hyphens. 
    - Make all letters lowercase. 
    - Remove any punctuation 
    - Example:
        - Project name: Lab's Great Psychopy Project
        - Folder name: labs-great-psychopy-project
- Commit the edits and push to the remote repository on your branch.
- Make a pull request to merge your branch into main. 
- When that PR is approved, go to the [Data Station Repository](https://github.com/Brain-Music-Lab/ListenerFacingDesign/tree/add-psychopy-submodule)
- Make a branch in that repository, and commit your edits to the remote repository on that branch
    - `cd ListenerFacingDesign`
    - `git checkout -b <BRANCH NAME> main`
    - `git add psychopy-projects`
    - `git commit -m <COMMIT MESSAGE>`
    - `git push --set-upstream origin <BRANCH NAME>`
- Make a pull request to merge your branch into develop.
    