import { R } from '@/common';
import { RematchDispatch } from '@/common/store';

export default {
  state: {
    code: 200,
    data: [],
    page: 1,
    pageSize: 20,
    resultMessage: '',
    totalCount: 0,
    relativeTable: {
      code: 200,
      data: [],
      page: 0,
      pageSize: 20,
      resultMessage: '',
      totalCount: 0,
    },
  },
  reducers: {
    repairs(_: AnyState, payload: AnyAction) {
      return payload;
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    async fetchRepairs(payload = {}) {
      const defaultPayload = {
        pageSize: 50,
        pageIndex: 1,
        orderBy: 'create_dt',
        sortBy: 'desc',
      };
      const mergedPayload = { ...defaultPayload, ...payload };
      const repairList = await R({
        url: '/repair_tasks/query',
        method: 'POST',
        data: mergedPayload,
      });
      return dispatch.repair.repairs(repairList);
    },
    async fetchRepairsByHardwareCode(payload: string) {
      const data = {
        pageSize: 5,
        pageIndex: 1,
        orderBy: 'create_dt',
        sortBy: 'desc',
        statusList: ['1', '2'],
        ...payload,
      };
      const relatedRepairs = await R({
        url: '/repair_tasks/query',
        method: 'POST',
        data,
      });
      return relatedRepairs;
    },
    async fetchExceptionTypes() {
      const exceptionTypes = await R({ url: '/exception_types/all' });
      return exceptionTypes;
    },
    async createRepairTicket(payload) {
      const newRepairTicket = await R({
        url: '/repair_tasks',
        method: 'POST',
        data: payload,
      });
      return newRepairTicket;
    },
    async cancelRepair(payload) {
      return await R({
        url: `/repair_tasks/${payload}/cancel`,
        method: 'POST',
      });
    },
    async fetchRepairDetail(payload) {
      const repairDetail = await R({ url: `/repair_tasks/${payload}` });
      return repairDetail;
    },
    async addComment(payload) {
      return R({
        url: `/repair_tasks/${payload.id}/comments`,
        method: 'POST',
        data: payload,
      });
    },
    async addRepairExceptionType(payload) {
      const result = await R({
        url: `/repair_tasks/${payload.id}/exception_types/${payload.no}`,
        method: 'POST',
      });
      return result;
    },
    async deleteRepairExceptionType(payload) {
      const result = await R({
        url: `/repair_tasks/${payload.id}/exception_types/${payload.no}`,
        method: 'DELETE',
      });
      return result;
    },
  }),
};
