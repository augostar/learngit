git init ��������Ŀ¼���git���Թ���Ĳֿ�

��һ��git add����git ���ļ���ӵ��ֿ�
git add file.name

ִ��git add file.name����ʾ����˵��ִ�гɹ�
ִ��git add  ������Ӷ���ļ� git add file1.name file2.name

�ڶ��� git commit ���� git���ļ��ύ���ֿ�

git commit -m "��ʾ��Ϣ" ǿ�ҽ���Ҫд
git commit ͬʱ���ύ����ļ�

������ִ�� git status 
git  status �鿴�ֿ� ��Щ�ļ����޸��� ��Ҫ�ύ������


modified(�޸�) modified �����Ǳ��޸ĵ��ļ�


git diff <file.name> �鿴���屻�޸ĵ�����

diff  difference(����) ��д


git log �鿴��ʷ��¼

Ҳ������Ӳ��� --pretty=oneline �����һ�� 

�磺// һ��85ed...����commit id �汾�� 
85edc1b8670271cca212e47480587aa430375f82 <E6><88><91><E5><9C><A8><E5><AD><A6>git

����ʱ�⴩�� 
git��HEAD��ʾ��ǰ�汾 Ҳ��������ύ�İ汾 ��һ���汾����HEAD^ ���ϸ��汾HEAD^^ 
��Ȼ�汾�ܶ��ʱ���������������ʾ�ڶ��ٰ汾 �������ʮ�� HEAD~30

��һ���汾
git reset --hard HEAD^
