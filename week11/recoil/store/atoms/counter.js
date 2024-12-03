import {atom, selector} from 'recoil'

export const counterAtom= atom({
    default:0,
    key:"Counter"
})

export const evenSelector= selector ({
    key:"isEvenSelector",
    get: function({get}){
        const currentCount= get(counterAtom)
        return (currentCount % 2 == 0)
    }
})