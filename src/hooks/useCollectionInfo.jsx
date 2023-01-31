import { CollectionInfo } from "../helpers/type"

const desc = 'The First Digital Trading Card by President Trump.Are you ready to make history? For the first time ever, collect your own Official Trump Digital Trading Cards by President Trump. Incredible, hand-drawn art, inspired by President Trump’s extraordinary life & career.The collection features unique Trump Trading Cards, Limited One-of-Ones, Gold & Silver Autographed Cards. Cowboy Trump, Astronaut Trump, Business Trump… Which Trump are you?Learn more at CollectTrumpCards.com. Follow @realDonaldTrump @CollectTrump on Twitter and Truth Social.Before purchasing this Trump Digital Trading Card, please read carefully CollectTrumpCards.com’s Terms Of Service (bit.ly/3VZXY3g) and the Terms & Conditions specific to this NFT (bit.ly/3hfdIAQ). This explains all your rights and any restrictions.';

export const useCollectionInfo = (uid, contractName, contractAddr) => {
    // TODO: query collection from db;
    
    return new CollectionInfo(
        contractName, 
        contractAddr, 
        "goerli", 
        "", 
        "", 
        "https://i.seadn.io/gae/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A?auto=format&w=3840", 
        desc);
}