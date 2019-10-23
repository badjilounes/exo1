import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/model/user.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  // Notre liste d'éléments statiques
  doctors: UserInterface[] = [
    {id: 1, firstName: 'Pascal', lastName: 'Ladal'},
    {id: 2, firstName: 'Éric', lastName: 'Judor'},
    {id: 3, firstName: 'Jamel', lastName: 'Dridi'},
    {id: 4, firstName: 'Ramzi', lastName: 'Bédia'},
    {id: 5, firstName: 'Professeur', lastName: 'Strauss'},
    {id: 6, firstName: 'Professeur', lastName: 'Test'},
    {id: 7, firstName: 'Professeur', lastName: 'Lounès'},
    {id: 8, firstName: 'Julien', lastName: ''},
    {id: 9, firstName: 'Hichem', lastName: ''},
    {id: 10, firstName: 'Franck', lastName: ''},
    {id: 11, firstName: 'Alexis', lastName: ''},
    {id: 12, firstName: 'Théo', lastName: ''},
    {id: 13, firstName: 'Jean-Christophe', lastName: ''},
    {id: 14, firstName: 'Zaïr', lastName: ''},
    {id: 15, firstName: 'Khalil', lastName: ''},
    {id: 16, firstName: 'Patrick', lastName: ''},
  ];

  displayedDoctors = []; //La liste quiest liée à la vue (celle qui est affichée)
  paginatorInfo: PageEvent = {pageSize: 5, pageIndex: 0, length: this.doctors.length}; //Les informations que l'on lie au paginateur

  constructor() {}

  ngOnInit() {
    //À l'initialisation du composant on pagine nos éléments
    this.displayedDoctors = this.paginateElements<UserInterface>(this.doctors, this.paginatorInfo);
  }

  //Méthode déclenchée lorsqu'une recherche est faite dans notre composant de recherche
  search(query: string): void { 
    //Si la recherche est vide on affecte tous les éléments à la liste que l'on affiche
    this.displayedDoctors = this.doctors;

    //Sinon on filtre les éléments dont le nom ou le prénom ne commence pas par la chaîne recherchée 
    if (query !== ''){
      this.displayedDoctors = this.doctors.filter((doctor) => {

        const len = query.length; // On récupère la taille de la chaîne recherchée
        const firstName = doctor.firstName.substr(0, len).toLocaleLowerCase(); // On crée une sous chaîne du prénom de la même taille que celle recherchée
        const lastName = doctor.lastName.substr(0, len).toLowerCase(); // Idem ave cle nom

        //On vérifie ensuite l'égalité des chaînes (on transforme ces chaînes en minuscule pour ne pas être sensible à la casse)
        const firstNameMatched = firstName === query.toLowerCase(); 
        const lastNameMatched = lastName === query.toLowerCase();

        //On conserve les éléments si la sous-chaîne créée avec le prénom ou celle créée avec le nom correspond
        return firstNameMatched || lastNameMatched;
      });
    } 

    this.paginatorInfo.pageIndex = 0; //On remet la paginateur à la première page
    this.paginatorInfo.length = this.displayedDoctors.length; //On affecte la taille des éléments trouvés à la taille du paginateur
    this.displayedDoctors = this.paginateElements<UserInterface>(this.displayedDoctors, this.paginatorInfo); // On pagine nos éléments qui correspondent à la recherche
  }

  //Méthode déclenchée lorsque l'utilisateur change de page ou change la taille du paginateur
  pageChange(event: PageEvent): void {
    this.paginatorInfo = event; //On met à jour la variable qui contient les informations du paginateur
    this.displayedDoctors = this.paginateElements<UserInterface>(this.doctors, this.paginatorInfo); // On pagine nos éléments affichés
  }

  /*
    Méthode paramétrique qui permet de paginer des éléments de n'importe quel type
    Prend en paramètre un tableau d'élément et un paginateur
    Retourne un tableau d'élément du même type
  */
  paginateElements<T>(elements: T[], paginator: PageEvent): T[] {
    return elements.filter((element, index) => {
      const start = paginator.pageIndex * paginator.pageSize; //On construit l'indice de départ.
      const end = start + paginator.pageSize - 1; // On construit l'indice de fin.
      return index >= start && index <= end; // On conserve que les éléments qui sont compris entre les indices de départ et de fin.
    });
  }

}
