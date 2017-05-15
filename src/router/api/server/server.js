import Base from './../base';

import serverCtrl from './../../../controller/server';

export default new class extends Base {

  /**
   * 创建监控的server
   * @method POST
   * @url /server/add
   * @param req
   * @param res
   * @param params { name, hosts, weight }
   * @return {}
   */
  server10000 = async (req, res, params) => {
    try {
      const result = await serverCtrl.addServer(params);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res)(err);
    }
  }

  /**
   * 修改监控的server信息
   * @method POST
   * @url /server/update
   * @param req
   * @param res
   * @param params { id, name, hosts, weight }
   * @return {}
   */
  server10001 = async (req, res, params) => {
    try {
      const result = await serverCtrl.updateServer(params);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res)(err);
    }
  }
};
