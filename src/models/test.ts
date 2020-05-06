import { R } from '@/common';
import { dispatch, RematchDispatch } from '@/common/store';

export default {
  state: {
    code: 0,
    count: 0,
    data: [],
    message: '',
  },
  reducers: {
    transStation: (state, payload: AnyAction) => {
      return payload;
    },
  },
  effects: {
    async createBags(payload: string) {
      return R({
        url: '/bags/add',
        method: 'POST',
        data: {
          bagsNum: Number(payload),
        },
      });
    },
    async fetchBags(payload: AnyPayload) {
      const defaultPayload = { pageSize: 20, pageIndex: 1 };
      const mergedPayload = { ...defaultPayload, ...payload };
      return R({
        url: '/bags/query',
        method: 'GET',
        data: mergedPayload,
      });
    },
    async fetchTransferLog(payload: AnyPayload) {
      const defaultPayload = {
        pageSize: 20,
        pageIndex: 1,
        sortBy: 'desc',
        orderBy: 'create_dt',
      };
      const mergedPayload = { ...defaultPayload, ...payload };
      return R({
        url: '/bags/transfer_log',
        method: 'GET',
        data: mergedPayload,
      });
    },
    async fetchSignInLog(payload: AnyPayload) {
      const defaultPayload = { pageSize: 20, pageIndex: 1 };
      const mergedPayload = { ...defaultPayload, ...payload };
      return R({
        url: '/bags/receive_log',
        method: 'GET',
        data: mergedPayload,
      });
    },
    async updateBagWasteRemovalNo(payload: AnyPayload) {
      return R({
        url: `/bag/web/${payload.bagNo}/change_waste_removal_no`,
        method: 'POST',
        data: {
          remark: payload.remark,
          wasteRemovalNo: payload.wasteRemovalNo,
        },
      });
    },
    async updateBagPosition(payload: AnyPayload) {
      return R({
        url: `/bag/web/${payload.bagNo}/change_position`,
        method: 'POST',
        data: {
          positionType: payload.positionType,
          positionKey: payload.positionKey,
          remark: payload.remark,
        },
      });
    },
    async updateBagStatus(payload: AnyPayload) {
      return R({
        url: `/bag/web/${payload.bagNo}/change_bag_deliverable`,
        method: 'POST',
        data: {
          deliverable: payload.deliverable,
          remark: payload.remark,
        },
      });
    },
    async fetchBagReviseLog(payload: AnyPayload) {
      const defaultPayload = {
        pageIndex: 1,
        pageSize: 50,
        sortBy: 'desc',
        orderBy: 'create_dt',
      };
      const mergedPayload = { ...defaultPayload, ...payload };
      return R({
        url: '/bag/web/modify_record/query',
        method: 'GET',
        data: mergedPayload,
      });
    },
  },
};
