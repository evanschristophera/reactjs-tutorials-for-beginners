# [reactjs-tutorials-for-beginners](https://github.com/evanschristophera/reactjs-tutorials-for-beginners)
## Github SSL Config
Use ssh-keygen to create a keypair.  The following examples use the filename ```github_rsa```

After creating a key pair with ssh-keygen and uploading it to github the following should be run:

The following should be in your ~/.ssh/config file:
```
host github.com
hostname github.com
IdentityFile ~/.ssh/github_rsa
```

```
ssh -i ~/.ssh/github_rsa -T git@github.com
```


## Tutorial Links and Notes

- [Part 3 Creating A React Project](https://youtu.be/3NjfGNuWOg8?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 4 Understanding Significance Of React Project Files](https://youtu.be/MZfOqCx0s7s?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 5 How React App Works](https://youtu.be/DYNBBqlwL_o?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 6 Components In React](https://youtu.be/r57Jck10_-0?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 7 Functional Components In React](https://youtu.be/tQa1ml4kwlg?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 8 Class Components In React](https://youtu.be/owulDWGqJoM?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 9 JSX](https://youtu.be/-6IJkmxfUug?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)j
- [Part 10 Props In Functional Component](https://youtu.be/UPIBbxDDRHI?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 11 Props In A Class Based Component](https://youtu.be/o3biU6YIhjI?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)
- [Part 12 Immutability Of Props](https://youtu.be/uU5n0tbpG7Q?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)

    Props are immutable and, by definition, read only!!!

- [Part 13 Props v/s State](https://youtu.be/opIzmB3PlsQ?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)

    State is an object that contains information that may change over the lifetime of a component.

    State is Functional: useState Hook 
    Class this.state

- [Part 14 Using State](https://youtu.be/dwkrKNBaQLI?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)

    State is an Object!!
    

    
## General Notes
### Git Cheat
