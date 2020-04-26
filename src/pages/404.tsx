import { React, router } from '@/common';
import { Button, Divider, Result } from '@/components';

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="你好像迷路了?"
      extra={
        <div>
          <Button type="primary" onClick={router.goBack}>
            返回
          </Button>
          <Divider> Copyright © 你是不是迷路了～ </Divider>
        </div>
      }
    />
  );
};
