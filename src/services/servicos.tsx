import { API } from "./api";
import {IServico, IServicoData} from "../types/servico";
import { AxiosResponse } from "axios";



export async function CriarServicoAPI(id: number, descricao: string, preco: string, tempomedio: string, empresa_id: Number): Promise<AxiosResponse<IServicoData>>{
    return await API.post<IServicoData>('api/servicos',{
        id,
        descricao,
        preco,
        tempomedio,
        img_base64: "",
        empresa_id
    })
}

export async function AlterarServicoAPI(id: number, descricao: string, preco: string, tempomedio: string, empresa_id: Number): Promise<AxiosResponse<IServicoData>>{
    return await API.put<IServicoData>('api/servicos',{
        id,
        descricao,
        preco,
        tempomedio,
        img_base64: "",
        empresa_id
    })
}

export async function getServicosEmpresa(idEmpresa: number): Promise<AxiosResponse<IServicoData>>{
    return await API.get<IServicoData>(`api/servicos/getServicosEmpresa?idEmpresa=${idEmpresa}`)
}

export async function deleteServicosEmpresa(idServico: number): Promise<AxiosResponse<IServicoData>>{
    return await API.delete<IServicoData>(`api/Servicos?id=${idServico}`)
}

export async function postVincularProfissionalServico(funcionarioid: Number, servicoid: Number): Promise<AxiosResponse<IServicoData>>{
    return await API.post<IServicoData>('api/servicos/vinculaservicoprofissional',{
        id: 0,
        funcionarioid,
        servicoid
    })
}

export async function postDesvincularProfissionalServico(funcionarioid: Number, servicoid: Number): Promise<AxiosResponse<IServicoData>>{
    return await API.post<IServicoData>('api/servicos/desvinculaservicoprofissional',{
        id: 0,
        funcionarioid,
        servicoid
    })
}

export async function getBuscaProfissionaisServico(idServico: number): Promise<AxiosResponse<IServicoData>>{
    return await API.get<IServicoData>(`api/servicos/BuscaProfissionaisServico?idServico=${idServico}`)
}
