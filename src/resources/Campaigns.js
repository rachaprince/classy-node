import Resource from '../ClassyResource';

class Campaigns extends Resource {
  constructor(Classy) {
    super(Classy);
    
    this.retrieve = this.createMethod({
      method: "GET",
      path: '/campaigns/{campaignId}'
    });
    
    this.update = this.createMethod({
      method: "PUT",
      path: '/campaigns/{campaignId}'
    })
  }
}

export default Campaigns;
