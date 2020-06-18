# clean remote

## clean remote gitlab branch
```rb
Dir.chdir("/Users/feizheng/saybot/kellis-ng-front") do
  list = %x(git branch -a).split("\n")
  list.each do |branch|
    bran = branch.strip
    # '123-xxx' =~ /\d+-\w+/
    if bran =~ /\d+-.*/
      del_bran = bran.split("remotes/origin/")[1]
      puts del_bran
      system "git push origin --delete #{del_bran}"
    end
    #   system "git push origin --delete #{del_bran}"
  end
end
```
