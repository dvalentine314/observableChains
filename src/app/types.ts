import { Observable } from "rxjs";

export type ObservableInnerType<T> = T extends Observable<infer U> ? U : never;