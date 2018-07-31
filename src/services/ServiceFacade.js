import PhonesService from './PhonesService';
import UtilsService from './UtilsService';

class ServiceFacade {

    //Phones
    static getAllPhones(){
        return PhonesService.getInstance().getAllPhones();
    }
    static getPhoneById(phoneId){
        return PhonesService.getInstance().getPhoneById(phoneId);
    }

    //Utils
    static isDev(){
        UtilsService.getInstance().isDev();
    }
    
}
export default ServiceFacade;