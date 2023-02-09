import { h } from 'vue';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
  {
    title: '标题',
    align: 'center',
    dataIndex: 'titile',
  },
  {
    title: '内容',
    align: 'center',
    width: 400,
    dataIndex: 'content',
    customRender: ({ text }) => {
      return h('div', { style: 'max-height: 200px; overflow: hidden', innerHTML: text });
    },
  },
  {
    title: '发布人',
    align: 'center',
    dataIndex: 'sender',
  },
  {
    title: '优先级',
    align: 'center',
    dataIndex: 'priority',
  },
  {
    title: '文章类型',
    align: 'center',
    dataIndex: 'articleType',
  },
  {
    title: '发布状态',
    align: 'center',
    dataIndex: 'pubStatus',
  },
  {
    title: '发布时间',
    align: 'center',
    dataIndex: 'pubTime',
    customRender: ({ text }) => {
      return !text ? '' : text.length > 10 ? text.substr(0, 10) : text;
    },
  },
  {
    title: '撤销时间',
    align: 'center',
    dataIndex: 'cancelTime',
    customRender: ({ text }) => {
      return !text ? '' : text.length > 10 ? text.substr(0, 10) : text;
    },
  },
  {
    title: '删除状态',
    align: 'center',
    dataIndex: 'delFlag',
  },
  {
    title: '打开方式',
    align: 'center',
    dataIndex: 'openType',
  },
  {
    title: '组件/路由 地址',
    align: 'center',
    dataIndex: 'openPage',
  },
  {
    title: '摘要',
    align: 'center',
    dataIndex: 'articleAbstract',
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [];
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
    component: 'Input',
    render: render.renderTinymce,
  },
  {
    label: '文章类型',
    field: 'articleType',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '笔记',
          value: 'note',
          key: '1',
        },
      ],
    },
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
    show: false,
  },
];

/**
 * 流程表单调用这个方法获取formSchema
 * @param param
 */
export function getBpmFormSchema(_formData): FormSchema[] {
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}