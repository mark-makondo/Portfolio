import { useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootStateType } from "./app.types";

export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
export const useAppSelector = useSelector.withTypes<RootStateType>();
