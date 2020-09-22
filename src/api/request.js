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
export function deleteConsumerList(data){
    return axios ({
        url:api.CONSUMERDELETE,
        method:'DELETE',
        params:data
    })
}

export function getConsumerInfo(data){
    return axios ({
        url:api.CONSUMERINFO,
        method:'GET',
        params:data
    })
}

export function updateConsumerInfo(data){
    return axios ({
        url:api.CONSUMERUPDATE,
        method:'PUT',
        data
    })
}
