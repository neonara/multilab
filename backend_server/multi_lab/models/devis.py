from django.db import models
from django.core.validators import validate_comma_separated_integer_list

class


class Devi(models.Model):
    CHOICES = (
        ('microbiologie', 'Microbiologie'),
        ('physicochimie', 'Physicochimie'),
         ('Alimentation_Animale', 'Alimentation Animale'),
       
    ),
    Alimentation_Animale= (
        ('Teneur_en_eau', 'Teneur en eau'),
        ('Cendres_Brutes','Cendres Brutes'),
        ('Cendres_insolubles_dans_l_acide chlorhydrique ','Cendres insolubles dans l’acide chlorhydrique '),
        ('Protéines_Brutes','Protéines Brutes'),
        ('Matières_Grasses','Matières Grasses'),
        ('Cellulose_Brute','Cellulose Brute'),
        ('Phosphore_Total','Phosphore Total'),
        ('Calcium','Calcium'),
        ('Chlore_des_chlorures_exprimé_en_NaCl',''),
        ('Magnésium','Magnésium'),
        ('Potassium','Potassium'),
        ('Sodium','Sodium'),
        ('Fer','Fer'),
        ('Cuivre','Cuivre'),
        ('Manganèse','Manganèse'), 
        ('Zinc','Zinc'),
        ('Urée','Urée'),
        ('Amidon total','Amidon total'),
        ('Sucres_Totaux','Sucres Totaux'),
        ('ADL_:_Lignine_Résidu_insoluble_au_détergent_et_au_H2SO4_72%','ADL: Lignine Résidu insoluble au détergent et au H2SO4 72%'),
        ('ADF: Résidu insoluble au détergent',''),
        ('PDI_(Qualité_des_protéines)','PDI (Qualité des protéines) '),
        ('Activité_ureasique','Activité ureasique'),
        ('Activité_de_l_eau ','Activité de l eau '),
        ('Test_KOH','Test KOH'),
        ('Cobalt','Cobalt'),
        ('Cadmium','Cadmium'),
        ('Plomb','Plomb'),
        ('Mercure','Mercure'),
        ('Vitamine_A','Vitamine A'),
        ('Vitamine_E','Vitamine E'),
        ('Vitamine_D3','Vitamine D3'),
        ('Aflatoxines_B1_B2_G1_G2','Aflatoxines B1 B2 G1 G2'),
        ('Ochratoxines','Ochratoxines'),
        ('Valeur_Energétique_(Monogastriques)','Valeur Energétique (Monogastriques)'),
        ('Valeur_PDIE,PDIN,UFL(Polygastriques)','Valeur PDIE, PDIN, UFL (Polygastriques)')
    ),
    AnalyseMicrobiologieProduitsEaux = (
        ('Micro_organismes_revivifiables_à_36°C(FT)','Micro-organismes  revivifiables à 36 °C (FT)'),
        ('Micro_organismes_revivifiables_à_22°C(FT)','Micro-organismes revivifiables à 22 °C (FT)'),
        ('Dénombrement_des_Coliformes_totaux_à_37°C(CT)','Dénombrement des Coliformes totaux à 37°C  (CT)'),
        ('Dénombrement_des_Coliformes_totaux_à_36°C(CT)','Dénombrement des Coliformes totaux à 36°C  (CT)'),
        ('Dénombrement_des_Coliformes_thermotolérants_à_44°C(CF)','Dénombrement des Coliformes thermotolérants à 44°C  (CF)'),
        ('Dénombrement_des_Escherichia_coli_à_44°C(Ec)','Dénombrement des Escherichia coli à 44 °C (Ec)'),
        ('Dénombrement_des_Escherichia_coli_à_36_°C_(Ec)','Dénombrement des Escherichia coli à 36 °C (Ec)'),
        ('Dénombrement_des_Entérocoques_Intestinaux_à_36°C(Entéroc)','Dénombrement des Entérocoques Intestinaux à 36°C(Entéroc)'),
        ('Dénombrement_des_Sprores_d_Anaerobies_sulfito_réducteurs_à_37°C/(SASR)','Dénombrement des Sprores d Anaerobies sulfito réducteurs à 37°C /(S ASR)'),
        ('Dénombrement_des_Streptocoques_fécaux_à_37°C(SF)','Dénombrement des Streptocoques fécaux à 37 °C (SF)'),
        ('Dénombrement_des_Staphylococcus_aureus_à_37°C(Staph)','Dénombrement des Staphylococcus aureus à 37°C(Staph)'),
        ('Recherche_des_Pseudomonas_aeruginosa_(Pseudo)','Recherche_des_Pseudomonas_aeruginosa_(Pseudo)'),
        ('Dénombrement_des_Levures_et_Moisissures_à_25°C_(LM)','Dénombrement des Levures et Moisissures à 25 °C (LM)'),
        ('Recherche_et_Dénombrement_des_Vibrio_parahaemolyticus','Recherche et Dénombrement des Vibrio parahaemolyticus'),
        ('Recherche_de_salmonella_spp(Salm)','Recherche de salmonella spp (Salm)'),
        ('Recherche_et_dénombrement_de_Légionella_pneumophila_à36°C','Recherche et dénombrement de Légionella pneumophila à 36°C'),
    ),
    AnalysesPhysicochimiquesProduitsdEaux = (
        ('pH','pH'),
        ('Conductivité','Conductivité'),
        ('Dureté_TH','Dureté TH'),
        ('Sulfates','Sulfates'),
        ('Magnésium','Magnésium'),
        ('Chlorure','Chlorure'),
        ('Calcium','Calcium'),
        ('Phosphore','Phosphore'),
        ('Titre_Alcalimétrique_TA_Titre_Alcalimétrique_Complet_TAC','Titre Alcalimétrique TA Titre Alcalimétrique Complet TAC'),
        ('Résidu_Sec','Résidu Sec'),
        ('Nitrates','Nitrates'),
        ('MES','MES'),
        ('Fluorures','Fluorures'),
        ('Turbidité','Turbidité'),
        ('Chlore_Libre_et_du_chlore_Total','Chlore Libre et du chlore Total'),
        ('Degré_chloromètrique_(Eau_de_javel)','Degré chloromètrique (Eau de javel)'),
        ('Matières_décantables','Matières décantables'),
        ('Sels_dissouts_TDS','Sels dissouts TDS'),
        ('Azote_ammoniacal','Azote ammoniacal'),
        ('Couleur;odeur,Saveur','Couleur; odeur, Saveur'),

    ),
    Analyses_microbiologiques_produits_alimentaires = (
        ('Dénombrement_des_micro_organismes_à30°C','Dénombrement des micro-organismes à 30 °C'),
        ('Dénombrement_des_coliformes_à_30°C','Dénombrement des coliformes à 30°C'),
        ('Dénombrement_des_coliformes_thermo_tolérants_à_44°C','Dénombrement des coliformes thermo tolérants à 44°C'),
        ('Dénombrement_des_Escherichia_coli_ß_glucuronidase+_à_44_°C','Dénombrement des Escherichia coli ß glucuronidase+ à 44 °C'),
        ('Dénombrement_des_Staphylocoques_coagulase+_à_37°C','Dénombrement des Staphylocoques coagulase+ à 37°C'),
        ('Dénombrement_des_Clostridium_perfringens_à_37°C','Dénombrement des Clostridium perfringens à 37°C'),
        ('Dénombrement_des_Levures_et_Moisissures_à_25_°C','Dénombrement des Levures  et Moisissures à 25 °C'),
        ('Dénombrement_des_Anaerobies_Sulfito_Réducteurs_à_37°C','Dénombrement des Anaerobies Sulfito Réducteurs à 37°C'),
        ('Recherche_des_Salmonella_spp','Recherche des Salmonella spp'),
        ('Recherche_des_Salmonella_typhi_ou_paratyphi','Recherche des Salmonella typhi ou paratyphi'),
        ('Dénombrement_des_Enterobacteriaceae_à_37°C_ou_à_30°C','Dénombrement des Enterobacteriaceae à 37°C ou à 30°C'),
        ('Recherche_Listeria_spp','Recherche Listeria spp'),
        ('Recherche_Listeria_monocytogenes','Recherche Listeria monocytogenes'),
        ('Dénombrement_de_Listeria_monocytogenes_à_37°C','Dénombrement de Listeria monocytogenes à 37°C'),
        ('Dénombrement_des_Bactéries_lactiques_à_30°C','Dénombrement des Bactéries lactiques à 30°C'),
        ('Dénombrements_des_microorganismes_psychrotrophes_à_6,5°C','Dénombrements des microorganismes psychrotrophes à 6,5°C'),
        ('Dénombrement de Bacillus cereus à 30°C','Dénombrement de Bacillus cereus à 30°C'),
        ('Dénombrement_des_Pseudomonas_spp_à_22°C','Dénombrement des Pseudomonas spp à 22°C'),
        

    ),
    ANALYSESPHYSICOCHIMIQUESVIANDESDERIVES = (
        ('pH','pH'),
        ('Chlorures','Chlorures'),
        ('Azote_total','Azote total'),
        ('Matière_grasse_totale','Matière grasse totale'),
        ('Amidon','Amidon'),
        ('Nitrites','Nitrites'),
        ('Phosphore_Total','Phosphore Total'),
        ('Matières_sèches','Matières sèches'),
        ('Activité_de_l_eau_Aw','Activité de l eau Aw'),
        ('Acides_gras_Saturés,Mono_Insaturés,Poly_Insaturés','Acides gras Saturés, Mono Insaturés, Poly Insaturés')
    )

    fullname = models.CharField('nom et prénom',max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    poste=models.CharField(max_length=250)
    numero_telephone=models.IntegerField('Numéro de téléphone')
    email = models.EmailField(max_length=254)
    parametre_analyes=models.CharField(max_length=254)
    type_debis = models.CharField(max_length=255,choices=CHOICES, validators=[validate_comma_separated_integer_list])
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.fullname
    class Meta:
        verbose_name_plural="List Devis Client"