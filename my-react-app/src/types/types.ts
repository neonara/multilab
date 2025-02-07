export type Perstation = {
  title: string;
  description: string;
  image: string;
  status: string;
  link_description: string;
  icon_image: string;
};
export type Analysesmicrobiologiquesproduitsalimentaires = {
  id: number;
  type_analyses_microbiologiques_produits_alimentaires: string;
};
export type AnalyseMicrobiologieProduitsEaux = {
  id: number;
  type_analyse_microbiologie_produits_eaux: string;
};
export type TypeAnalysesAlimentationAnimale = {
  id: number;
  type_alimentation_animale: string;
};
export type TypeAnalysesPhysicochimiquesProduitsEaux = {
  id: number;
  type_analyses_physicochimiques_produits_eaux: string;
};
export type TypeAnalysesProduitCosmetique = {
  id: number;
  type_analyses_microbiologiques_produits_cosmetique: string;
};
export type EventArticle = {
  id: number;
  description: string;
  image1: string;
  image2?: string;
  image3?: string;
  created_at: string;
};
export type EventMULTILAB = {
  id: number;
  title: string;
  description: string;
  image: string;
  date_event: string;
  status: string;
  articles: EventArticle[];
};
//test
export type JobtShow = {
  id: number;
  titre: string;
  departement: string;
  description: string;
  temps: string;
  contrat: string;
  status: string;
  experience: string;
  created_at: Date;
};
export type ApplicationForm = {
  titre: string; // or number if using ID references
  fullname: string;
  email: string;
  numero_telephone: string;
  ville: string;
  transport: string;
  cvfile: File | null;
};
export type OffreStageShow = {
  id: number;
  titre: string;
  description: string;
  departement: string;
  type_stage: string;
  status: string;
  created_at: Date;
};
export type OffreStageForm = {
  titre: string; // or number if using ID references
  fullname: string;
  ville: string;
  email: string;
  numero_telephone: string;
  cvfile: File | null;
  type_stage: string;
};
//
export type CandidatesSimplifyForm = {
  fullname: string;
  email: string;
  phone_number: string;
  description: string;
  file1: File | null; // Assuming file upload will be handled
};
//
