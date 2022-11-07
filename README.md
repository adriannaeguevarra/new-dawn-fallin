# **Requirements**
- [node version 18.12.1](https://nodejs.org/en/)
- [amplify cli](https://docs.amplify.aws/cli/start/install/)

---
# **Getting Started**
- `git clone git@github.com:adriannaeguevarra/new-dawn-fallin.git`
- `git checkout development`
- `cd into directory`
- `npm i`

---

# **Initialize the development branch using the dev amplify backend**
- `amplify init`

---

## Prompt Should Look Like

___

Note: It is recommended to run this command from the root of your app directory
- ? Do you want to use an existing environment?
**Yes**
- ? Choose the environment you would like to use:
**dev**
- ? Choose your default editor:
**Visual Studio Code**
- Using default provider  awscloudformation
For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html
- ? Do you want to use an AWS profile?
**Yes**
- ? Please choose the profile you want to use
**your-amplify-cli-user (should be configured via /.aws/config and /.aws/credentials; ask Adrianna for assistance to set this up)**
✔ Initialized provider successfully.
Initialized your environment successfully.
Your project has been successfully initialized and connected to the cloud!
- **Now you should be using the same Frontend and Backend!**

---

# **To Start Up Dev Server**
- `npm run dev`

---

# **Development Workflow**

### **Frontend**

- create a new branch off development and follow the naming convention feat/<initials>/<description of feature>
- initialize amplify backend `amplify init` (follow same steps above)
- run dev server so you can see your FE changes instantly
- when feature is done create PR and await feedback and approval before merging into development branch
- if you need to pull new amplify BE a BE Developer will make an announcement and then you would run `amplify pull` make sure you are pulling the dev env
- when PR is merged or you are awaiting for approval follow these steps again when starting your new feature

### **Backend**

- create sandbox amplify env when adding new changes to backend
    - while in the development branch create a sandbox branch by running `git checkout -b <name-sandbox>`
    - initialize amplify sandbox by running 'amplify init'
        #### Prompt Should Look Like:
        - ? Do you want to use an existing environment?
        **No**
        - ? Enter a name for the environment
        **name-sandbox**
        - Using default provider awscloudformation
        For more information on AWS Profiles, see:
        https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html
        - ? Do you want to use an AWS profile?
        **Yes**
        - ? Please choose the profile you want to use
       **your-amplify-cli-user (should be configured via /.aws/config and /.aws/credentials; ask Adrianna for assistance to set this up)**
    - add your changes to amplify backend and then do the following
        - `amplify push`
        - `git add -A`
        - `git commit -m 'Add <service that was added> or whatever the change that was made`
        - `git push` (should be pushing to **sandbox** branch)
    - create PR to merge sandbox to development branch 
        - once approved and merged into development notify FE & BE that changes have been made so they can pull the new changes
        - delete sandbox branch 
        `git checkout -D <name-sandbox>`
        - then remove amplify sandbox BE by doing 
        `amplify env remove sandbox`
        - then checkout development BE by doing 
        `amplify env checkout dev` 
        - then `amplify pull`
        - if you need to make changes to the amplify BE again, then you will need to start from the top of the BE instructions
---

# **To Pull New Changes after BE has been merged Do the following**
    
- make sure your amplify env is `dev` if not, then do `amplify env checkout dev` 
- run `amplify pull`
- now you should have the latest development backend

---

# **CI/CD**
    
 - This project leverages the use amplify hosting and s3 storage so all we have to do is make sure the code we want to deploy is valid and then run `amplify publish`
- **Adrianna** is in charge of this, so she should be the only one doing this

---

# **References for Amplify Workflow**
[amplify workflow reference](https://janhesters.com/multiple-environments-with-aws-amplify)
