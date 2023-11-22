# reactjs-tutorials-for-beginners
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