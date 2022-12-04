import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NgLetModule } from "ng-let";
import { MaterialModule } from "src/app/material/material.module";
import { PageLoaderModule } from "../../components/page-loader/page-loader.module";
import { TenderItemListComponent } from "./components/tender-item-list/tender-item-list.component";
import { TenderListComponent } from "./components/tender-list/tender-list.component";
import { EqTenderRoutingModule } from "./eq-tender-routing.module";
import { EqTenderComponent } from "./eq-tender.component";
import { AllTendersComponent } from "./pages/all-tenders.component";
import { ApplicationsComponent } from "./pages/applications/applications.component";
import { CreateNewComponent } from "./pages/create-new/create-new.component";
import { TendersComponent } from "./pages/tenders.component";
import { EqTenderService } from "./services/eq-tender.service";
import { LoadingService } from "./services/loading.service";

@NgModule({
  providers: [EqTenderService, LoadingService],
  declarations: [
    EqTenderComponent,
    TenderListComponent,
    TenderItemListComponent,
    AllTendersComponent,
    CreateNewComponent,
    TendersComponent,
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    EqTenderRoutingModule,
    MaterialModule,
    NgLetModule,
    ReactiveFormsModule,
    PageLoaderModule
  ],
  exports: []
})
export class EqTenderModule { }
