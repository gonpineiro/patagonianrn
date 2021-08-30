import Config from 'react-native-config';
export const ENV = Config.ENV;

const isPoduction = ENV === 'production';

export const API_URL = isPoduction ? Config.PROD_API_URL : Config.STAGING_API_URL;
