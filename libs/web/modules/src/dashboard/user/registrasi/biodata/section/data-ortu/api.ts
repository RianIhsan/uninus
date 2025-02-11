import { api } from "@uninus/web/services";
import {
  TSalaryResponse,
  ISalaryRequest,
  IOccupationRequest,
  TOccupationResponse,
  IOccupationPositionRequest,
  TOccupationPositionResponse,
} from "@uninus/entities";

export const SalaryGet = async (params: ISalaryRequest): Promise<TSalaryResponse> => {
  const { data } = await api<TSalaryResponse>({
    method: "GET",
    params,
    url: "/salary",
  });
  return data;
};

export const OccupationGet = async (params: IOccupationRequest): Promise<TOccupationResponse> => {
  const { data } = await api<TOccupationResponse>({
    method: "GET",
    params,
    url: "/occupation",
  });
  return data;
};

export const OccupationPositionGet = async (
  params: IOccupationPositionRequest,
): Promise<TOccupationPositionResponse> => {
  const { data } = await api<TOccupationPositionResponse>({
    method: "GET",
    params,
    url: "/occupation-position",
  });
  return data;
};
