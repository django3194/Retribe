import { Component } from '@angular/core';
import { TribesPage } from '../tribes/tribes'; 
import { AccountPage } from '../account/account';
import { UsersPage } from '../users/users';
import { HomePage } from '../home/home';

@Component({
	selector: 'tabs-page',
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tribes = TribesPage;
	users = UsersPage;
    profile = AccountPage;
	home = HomePage;
}