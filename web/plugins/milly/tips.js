/**
 * Use 'console' print some message, like as 'debug' log info warn error.
 * If the project will putting in production environment, just remember remove 'console'.
 * example: console.log('')
 * 
 * Browser Support Output Type List:
 * IE ------       log info warn error assert dir clear profile profileEnd;
 * FIREBUG - debug log info warn error exception assert dir dirxml 
 * 			 trace group groupEnd groupCollapsed time timeEnd profile 
 * 			 profileEnd count clear table notifyFirebug firebug;
 * CHROME -- debug log info warn error profiles memory dir dirxml trace assert count 
 * 			 markTimeline profile profileEnd time timeEnd group groupCollapsed groupEnd;
 * OPERA --- debug log info warn error time timeEnd trace profile profileEnd 
 * 		     assert dir dirxml group groupCollapsed groupEnd count table.
 */

/**
 * shortcut key for eclipse
 * 
 * Ctrl+1 �����޸�(���Ŀ�ݼ�,�Ͳ��ö�˵��)
 * Ctrl+D: ɾ����ǰ�� 
 * Ctrl+Alt+�� ���Ƶ�ǰ�е���һ��(��������)
 * Ctrl+Alt+�� ���Ƶ�ǰ�е���һ��(��������)
 * Alt+�� ��ǰ�к�����һ�н���λ��(�ر�ʵ��,����ʡȥ�ȼ���,��ճ����)
 * Alt+�� ��ǰ�к�����һ�н���λ��(ͬ��)
 * Alt+�� ǰһ���༭��ҳ��
 * Alt+�� ��һ���༭��ҳ��(��Ȼ���������������˵��)
 * Alt+Enter ��ʾ��ǰѡ����Դ(����,or �ļ� or�ļ�)������
 * Shift+Enter �ڵ�ǰ�е���һ�в������(��ʱ�������ڵ�ǰ�е���һλ��,��һ�������)
 * Shift+Ctrl+Enter �ڵ�ǰ�в������(ԭ��ͬ����)
 * Ctrl+Q ��λ�����༭�ĵط�
 * Ctrl+L ��λ��ĳ�� (���ڳ��򳬹�100���˾��и�����)
 * Ctrl+M ��󻯵�ǰ��Edit��View (�ٰ���֮)
 * Ctrl+/ ע�͵�ǰ��,�ٰ���ȡ��ע��
 * Ctrl+O ������ʾ OutLine
 * Ctrl+T ������ʾ��ǰ��ļ̳нṹ
 * Ctrl+W �رյ�ǰEditer
 * Ctrl+K ����ѡ�е�Word���ٶ�λ����һ��
 * Ctrl+E ������ʾ��ǰEditer�������б�(�����ǰҳ��û����ʾ���ú����ʾ)
 * Ctrl+/(С����) �۵���ǰ���е����д���
 * Ctrl+��(С����) չ����ǰ���е����д���
 * Ctrl+Space �����������һЩ����Ĳ���(��һ������뷨�г�ͻ,�����޸����뷨���ȼ�,Ҳ��������Alt+/������)
 * Ctrl+Shift+E ��ʾ������ǰ�򿪵����е�View�Ĺ�����(����ѡ��ر�,����Ȳ���)
 * Ctrl+J ������������(����Ctrl+J��,���������ÿ����ĸ�༭�����ṩ����ƥ�䶨λ��ĳ������,���û��,����stutes line����ʾû���ҵ���,��һ������ʱ,�ر�ʵ��,�������Idea����ǰ������)
 * Ctrl+Shift+J ������������(��������ͬ,ֻ�����ǴӺ���ǰ��)
 * Ctrl+Shift+F4 �ر����д򿪵�Editer
 * Ctrl+Shift+X �ѵ�ǰѡ�е��ı�ȫ����ζСд
 * Ctrl+Shift+Y �ѵ�ǰѡ�е��ı�ȫ����ΪСд
 * Ctrl+Shift+F ��ʽ����ǰ����
 * Ctrl+Shift+P ��λ�����ڵ�ƥ���(Ʃ��{}) (��ǰ�涨λ����ʱ,���Ҫ��ƥ�������,���浽ǰ��,��֮)

 * ����Ŀ�ݼ����ع����泣�õ�(ע:һ���ع��Ŀ�ݼ�����Alt+Shift��ͷ����)
 * Alt+Shift+R ������ (�����Լ���õ�һ����,�����Ǳ��������Rename,���ֹ������ܽ�ʡ�ܶ��Ͷ���)
 * Alt+Shift+M ��ȡ���� (�����ع�������õķ���֮һ��,�����Ƕ�һ������Ŵ�������)
 * Alt+Shift+C �޸ĺ����ṹ(�Ƚ�ʵ��,��N�������������������,�޸�һ�θ㶨)
 * Alt+Shift+L ��ȡ���ر���( ����ֱ�Ӱ�һЩħ�����ֺ��ַ�����ȡ��һ������,�����Ƕദ���õ�ʱ��)
 * Alt+Shift+F ��Class�е�local������Ϊfield���� (�Ƚ�ʵ�õĹ���)
 * Alt+Shift+I �ϲ�����(��������˵�е㲻��Inline)
 * Alt+Shift+V �ƶ������ͱ���(����ô����)
 * Alt+Shift+Z �ع��ĺ��ҩ(Undo)
 * 
 * 
 * �༭
 * ������ ���� ��ݼ� 
 * ȫ�� ���Ҳ��滻 Ctrl+F 
 * �ı��༭�� ������һ�� Ctrl+Shift+K 
 * �ı��༭�� ������һ�� Ctrl+K 
 * ȫ�� ���� Ctrl+Z 
 * ȫ�� ���� Ctrl+C 
 * ȫ�� �ָ���һ��ѡ�� Alt+Shift+�� 
 * ȫ�� ���� Ctrl+X 
 * ȫ�� �������� Ctrl1+1 
 * ȫ�� ���ݸ��� Alt+/ 
 * ȫ�� ȫ��ѡ�� Ctrl+A 
 * ȫ�� ɾ�� Delete 
 * ȫ�� ��������Ϣ Alt+��
 * Alt+Shift+?
 * Ctrl+Shift+Space 
 * Java�༭�� ��ʾ������ʾ���� F2 
 * Java�༭�� ѡ���װԪ�� Alt+Shift+�� 
 * Java�༭�� ѡ����һ��Ԫ�� Alt+Shift+�� 
 * Java�༭�� ѡ����һ��Ԫ�� Alt+Shift+�� 
 * �ı��༭�� �������� Ctrl+J 
 * �ı��༭�� ����������� Ctrl+Shift+J 
 * ȫ�� ճ�� Ctrl+V 
 * ȫ�� ���� Ctrl+Y 
 * 
 *  
 * �鿴
 * ������ ���� ��ݼ� 
 * ȫ�� �Ŵ� Ctrl+= 
 * ȫ�� ��С Ctrl+- 
 * 
 *  
 * ����
 * ������ ���� ��ݼ� 
 * ȫ�� ����༭�� F12 
 * ȫ�� �л��༭�� Ctrl+Shift+W 
 * ȫ�� ��һ���༭�� Ctrl+Shift+F6 
 * ȫ�� ��һ����ͼ Ctrl+Shift+F7 
 * ȫ�� ��һ��͸��ͼ Ctrl+Shift+F8 
 * ȫ�� ��һ���༭�� Ctrl+F6 
 * ȫ�� ��һ����ͼ Ctrl+F7 
 * ȫ�� ��һ��͸��ͼ Ctrl+F8 
 * �ı��༭�� ��ʾ��������Ĳ˵� Ctrl+W 
 * ȫ�� ��ʾ��ͼ�˵� Ctrl+F10 
 * ȫ�� ��ʾϵͳ�˵� Alt+- 
 * 
 * 
 * ����
 * ������ ���� ��ݼ� 
 * Java�༭�� �򿪽ṹ Ctrl+F3 
 * ȫ�� ������ Ctrl+Shift+T 
 * ȫ�� �����Ͳ�νṹ F4 
 * ȫ�� ������ F3 
 * ȫ�� ���ⲿjavadoc Shift+F2 
 * ȫ�� ����Դ Ctrl+Shift+R 
 * ȫ�� ������ʷ��¼ Alt+�� 
 * ȫ�� ǰ����ʷ��¼ Alt+�� 
 * ȫ�� ��һ�� Ctrl+, 
 * ȫ�� ��һ�� Ctrl+. 
 * Java�༭�� ��ʾ��� Ctrl+O 
 * ȫ�� �ڲ�νṹ�д����� Ctrl+Shift+H 
 * ȫ�� ת��ƥ������� Ctrl+Shift+P 
 * ȫ�� ת����һ���༭λ�� Ctrl+Q 
 * Java�༭�� ת����һ����Ա Ctrl+Shift+�� 
 * Java�༭�� ת����һ����Ա Ctrl+Shift+�� 
 * �ı��༭�� ת���� Ctrl+L 
 * 
 *  
 * ����
 * ������ ���� ��ݼ� 
 * ȫ�� �������ļ��� Ctrl+Shift+U 
 * ȫ�� �������Ի��� Ctrl+H 
 * ȫ�� �������е����� Ctrl+G 
 * ȫ�� �������е����� Ctrl+Shift+G 
 * 
 * 
 * �ı��༭
 * ������ ���� ��ݼ� 
 * �ı��༭�� ��д�л� Insert 
 * �ı��༭�� �Ϲ��� Ctrl+�� 
 * �ı��༭�� �¹��� Ctrl+�� 
 * 
 * 
 * �ļ�
 * ������ ���� ��ݼ� 
 * ȫ�� ���� Ctrl+X 
 * Ctrl+S 
 * ȫ�� ��ӡ Ctrl+P 
 * ȫ�� �ر� Ctrl+F4 
 * ȫ�� ȫ������ Ctrl+Shift+S 
 * ȫ�� ȫ���ر� Ctrl+Shift+F4 
 * ȫ�� ���� Alt+Enter 
 * ȫ�� �½� Ctrl+N 
 * 
 *  
 * ��Ŀ
 * ������ ���� ��ݼ� 
 * ȫ�� ȫ������ Ctrl+B 
 * 
 *  
 * Դ����
 * ������ ���� ��ݼ� 
 * Java�༭�� ��ʽ�� Ctrl+Shift+F 
 * Java�༭�� ȡ��ע�� Ctrl+\ 
 * Java�༭�� ע�� Ctrl+/ 
 * Java�༭�� ���ӵ��� Ctrl+Shift+M 
 * Java�༭�� ��֯���� Ctrl+Shift+O 
 * Java�༭�� ʹ��try/catch������Χ δ���ã�̫�����ˣ������������г�,�����Լ����á�
 * Ҳ����ʹ��Ctrl+1�Զ������� 
 * 
 *  
 * ����
 * ������ ���� ��ݼ� 
 * ȫ�� �������� F7 
 * ȫ�� �������� F6 
 * ȫ�� �������� F5 
 * ȫ�� ��������ѡ�� Ctrl+F5 
 * ȫ�� �����ϴ����� F11 
 * ȫ�� ���� F8 
 * ȫ�� ʹ�ù���������ִ�� Shift+F5 
 * ȫ�� ����/ȥ���ϵ� Ctrl+Shift+B 
 * ȫ�� ��ʾ Ctrl+D 
 * ȫ�� �����ϴ����� Ctrl+F11 
 * ȫ�� �������� Ctrl+R 
 * ȫ�� ִ�� Ctrl+U 
 * 
 * 
 * �ع�
 * ������ ���� ��ݼ� 
 * ȫ�� �����ع� Alt+Shift+Z 
 * ȫ�� ��ȡ���� Alt+Shift+M 
 * ȫ�� ��ȡ�ֲ����� Alt+Shift+L 
 * ȫ�� ���� Alt+Shift+I 
 * ȫ�� �ƶ� Alt+Shift+V 
 * ȫ�� ������ Alt+Shift+R 
 * ȫ�� ���� Alt+Shift+Y
 */