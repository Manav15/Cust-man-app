import { User } from "./user"

export const USER_DATA : User[] = [{
    firstName : 'Bill',
    lastName : 'Gates',
    dob : new Date('Dec 10 , 1997'),
    Address : '2/7,Wall Street',
    City : 'Texas',
    State : 'America',
    OrderTotal : 30000,
    isLiving : true,
    image : './assets/Images/mid.jpg',
    votes : 120
},{
    firstName : 'Stafy',
    lastName : 'Graff',
    dob : new Date('Feb 14 , 1988'),
    Address : '8-A,brihingam Street',
    City : 'London',
    State : 'England',
    OrderTotal : 170000,
    isLiving : false,
    image : './assets/Images/fid.jpg',
    votes : 990
},{
    firstName : 'Tom',
    lastName : 'Cruze',
    dob : new Date('Mar 8 , 1880'),
    Address : '871 - DHE,Floyd Street',
    City : 'New Jersey',
    State : 'USA',
    OrderTotal : 780000,
    isLiving : true,
    image : './assets/Images/mid.jpg',
    votes : 290     
}]