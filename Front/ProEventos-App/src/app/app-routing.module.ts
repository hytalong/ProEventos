import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { routes } from "./app.routes";

const router: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
