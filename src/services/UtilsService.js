class UtilsService {

    static _instance = null;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new UtilsService();
        }
        return this._instance;
    }
    isDev(){
        return !process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
    }

}
export default UtilsService;