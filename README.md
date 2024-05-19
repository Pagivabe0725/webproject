## Első lépés
Első lépésként regisztrálni kell egy felhasználót, hogy be lehessen lépni az alkalmazásba, mivel az authGuard minden oldalt levéd és alapból nincs user az adatbázisban. Miután regisztráltál és  bejelentkeztél már mindenhez hozzáférsz. (Természetesen több felhasználót is lehet regisztrálni)

## Nincs Shared mappa
Nem csináltam shared mappát. Minden elem a róla elnevezett mappában található közvetlenül az *app* mappában. Tehát például a modulok a *Modules* mappában, a komponensek a *Components* mappában.

## bug
Ha alkalmanként hiba lép fel akkor, amikor a kosárba helyezed a terméket, akkor az oldal újratöltése megoldja ezt a gondot. 


## deploy-olt alkalmazás
Itt is fent áll egy olyan bug, hogy, ha újratöltődik az oldal, akkor egy not-found oldalt dob be, ez különösen a kosár kiűrítésére szolgáló gombnál zavaró, mivel itt egy reload() függvény is meghívásra kerül. A függvény ebben az esetben is elvégzi a feladatát, de a not-found oldalra dob a böngésző. Ha újra belépünk akkor láthatóvá válik az eredmény.
