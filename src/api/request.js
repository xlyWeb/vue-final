import api from '../api/api'
import axios from '../util/http'

export function getConsumerList(data){
    return axios ({
        url:api.CONSUMERLIST,
        method:'GET',
        params:data
    })
}
export function addConsumerList(data){
    return axios ({
        url:api.CONSUMERADD,
        method:'POST',
        data
    })
}
