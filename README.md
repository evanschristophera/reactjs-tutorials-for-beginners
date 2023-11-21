# reactjs-tutorials-for-beginners

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





- Part 3 Creating A React Project](https://youtu.be/3NjfGNuWOg8?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza)