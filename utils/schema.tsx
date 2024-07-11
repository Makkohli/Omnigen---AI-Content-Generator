import { boolean, serial, text, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formaData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt')

})

export const UserSubscription=pgTable('userSubscription',{
    id:serial('id').primaryKey(),
    email:varchar('email'),
    userName:varchar('userName'),
    active:boolean('active'),
    paymentId:varchar('paymentId'),
    joinDate:varchar('joinData')
})