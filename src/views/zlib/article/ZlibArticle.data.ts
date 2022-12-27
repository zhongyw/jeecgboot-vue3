import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '标题',
    align:"center",
    dataIndex: 'titile'
   },
   {
    title: '内容',
    align:"center",
    dataIndex: 'content'
   },
   {
    title: '发布人',
    align:"center",
    dataIndex: 'sender'
   },
   {
    title: '优先级（L低，M中，H高）',
    align:"center",
    dataIndex: 'priority'
   },
   {
    title: '文章对象类型（note:笔记，collect:采集）',
    align:"center",
    dataIndex: 'articleType'
   },
   {
    title: '发布状态（0未发布，1已发布，2已撤销）',
    align:"center",
    dataIndex: 'pubStatus'
   },
   {
    title: '发布时间',
    align:"center",
    dataIndex: 'pubTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '撤销时间',
    align:"center",
    dataIndex: 'cancelTime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '删除状态（0，正常，1已删除）',
    align:"center",
    dataIndex: 'delFlag'
   },
   {
    title: '打开方式(组件：component 路由：url)',
    align:"center",
    dataIndex: 'openType'
   },
   {
    title: '组件/路由 地址',
    align:"center",
    dataIndex: 'openPage'
   },
   {
    title: '摘要',
    align:"center",
    dataIndex: 'articleAbstract'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '标题',
    field: 'titile',
    component: 'Input',
  },
  {
    label: '内容',
    field: 'content',
    component: 'InputTextArea',
  },
  {
    label: '发布人',
    field: 'sender',
    component: 'Input',
  },
  {
    label: '优先级（L低，M中，H高）',
    field: 'priority',
    component: 'Input',
  },
  {
    label: '文章对象类型（note:笔记，collect:采集）',
    field: 'articleType',
    component: 'Input',
  },
  {
    label: '发布状态（0未发布，1已发布，2已撤销）',
    field: 'pubStatus',
    component: 'Input',
  },
  {
    label: '发布时间',
    field: 'pubTime',
    component: 'DatePicker',
  },
  {
    label: '撤销时间',
    field: 'cancelTime',
    component: 'DatePicker',
  },
  {
    label: '删除状态（0，正常，1已删除）',
    field: 'delFlag',
    component: 'Input',
  },
  {
    label: '打开方式(组件：component 路由：url)',
    field: 'openType',
    component: 'Input',
  },
  {
    label: '组件/路由 地址',
    field: 'openPage',
    component: 'Input',
  },
  {
    label: '摘要',
    field: 'articleAbstract',
    component: 'InputTextArea',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
