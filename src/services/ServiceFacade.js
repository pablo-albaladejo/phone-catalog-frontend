import PhonesService from './PhonesService';

class ServiceFacade {

    static getAllPhones(){
        return PhonesService.getInstance().getAllPhones();
    }

    static getPhoneById(phoneId){
        return PhonesService.getInstance().getPhoneById(phoneId);
    }
    
}
export default ServiceFacade;