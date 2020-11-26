# clean
- https://www.cnblogs.com/ziyue7575/p/45538b0b7dbe1cbbca5e4ca1a90810ca.html


## steps
```shell
# 1. 查看仓库大小
git count-objects -vH  # 查看当前仓库大小
du -sh  # 查看这个文件夹的总大小
ls -lh  # 查看这个文件夹中文件的大小

# 2.拉取项目:将项目所有分支拉下来
git clone xxx # 默认拉取master分支
cd xx #进入拉取的文件夹
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all

# 3. 查找大文件(若是知道具体的文件,不需要查)
# 将最大的10个文件查询下来
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -10 | awk '{print$1}')"
# 比如我查询了
486fa66baeb237a456266dccfab8bab14cde98ba pro_web_front_202009101858.gz
d644ed6c55ecc6e058a0a7d0c39c4e49984a37d1 src/assets/img/2.png
f45b37335083ad5c5598e3cf5a75a9fc07b9a803 static/pdf/build/pdf.worker.js.map
21e9d2cd0c73b246d86f603c7ff0e5cd8b8312bc static/pdf/web/operationManual.pdf
7c65cab916684f43d66053e570dbdf453e8ca507 src/assets/img/login.png
f8aebc2a121c89c99190553ac9b3dcc853315182 src/assets/img/login_2.png
13868adfda3704f8a8b10f64da068a11a418ccf2 src/assets/img/login_3.png

# 4. 处理记录
#文件可以是文件夹,也可以是文件 ,
#例如:文件夹的话可以是  /dist.js/
#例如:文件可以是  static/pdf/build/pdf.worker.js
git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch 文件' --prune-empty --tag-name-filter cat -- --all
# 会在项目根目录生成 .git_....文件夹,里面就是改的记录
# 一次只能处理一个文件/文件夹

# 回收空间
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --prune=now
git gc --aggressive --prune=now
# 此时查看本地,会发现项目明显减小了,若是还有需要的文件,就重复第3步即可

# 5.推送到服务器
git push origin --force --all
git remote prune origin
# 此时 ,拉取项目就已经是减小后的大小
# 但是查看服务器,服务器显示的大小还是原来的大小


# 6.清理服务器缓存
# 进入git服务器-->这个操作需要root权限,不然连文件夹都进不去
cd /var/opt/gitlab/git-data/repositories
#根据项目,进入对应的git项目文件夹
# 进入 项目.git文件,就可以看到和本地的.git目录中一样的目目录了
#查询git项目大小
git count-objects -vH   # 此时还是旧的大小
git gc --prune=now  # 清理无效文件
git count-objects -vH  # 此时就和本地一样,从库减小了
```

## optimze
![opmtize-log](https://tva1.sinaimg.cn/large/0081Kckwgy1gl2c3htj47j30vw0cex4t.jpg)
