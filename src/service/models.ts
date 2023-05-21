export interface ICatalog {
  title_rus: string;
  url_rus: string;
  title: string;
  id_parent: number;
  key: number;
}
export interface IFetchedVacancies {
  objects: IVacancy[];
  total: number;
}

export interface IVacancy {
  id: number;
  profession: string;
  firm_name: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
}
