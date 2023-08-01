const { DataTypes } = require('sequelize');
const sequelize = require('../database/database')();

const Tester = require('./Tester')(sequelize, DataTypes);
const UserModel = require('./User')(sequelize, DataTypes);
const AdminModel = require('./Admin')(sequelize, DataTypes);
const AgentModel = require('./Agent')(sequelize, DataTypes);
const BookingModel = require('./Booking')(sequelize, DataTypes);
const CommentModel = require('./Comment')(sequelize, DataTypes);
const CompanyModel = require('./Company')(sequelize, DataTypes);
const CountryModel = require('./Country')(sequelize, DataTypes);
const CountyModel = require('./County')(sequelize, DataTypes);
const CourseModel = require('./Course')(sequelize, DataTypes);
const DefaultModel = require('./Default')(sequelize, DataTypes);
const DepositModel = require('./Deposit')(sequelize, DataTypes);
const EmployeeModel = require('./Employee')(sequelize, DataTypes);
const EvictionModel = require('./Eviction')(sequelize, DataTypes);
const FeedbackModel = require('./Feedback')(sequelize, DataTypes);
const GenderModel = require('./Gender')(sequelize, DataTypes);
const House_RecordModel = require('./House_Record')(sequelize, DataTypes);
const House_StatisticModel = require('./House_Statistic')(sequelize, DataTypes);
const House_TypeModel = require('./House_Type')(sequelize, DataTypes);
const HouseModel = require('./House')(sequelize, DataTypes);
const IssueModel = require('./Issue')(sequelize, DataTypes);
const LandlordModel = require('./Landlord')(sequelize, DataTypes);
const LocationModel = require('./Location')(sequelize, DataTypes);
const MaintenanceModel = require('./Maintenace')(sequelize, DataTypes);
// const Marital_StatusModel = require('./Marital_Status')(sequelize, DataTypes); 
const NationalityModel = require('./Nationality')(sequelize, DataTypes);
const Password_ResetModel = require('./Password_Reset')(sequelize, DataTypes);
// const Postal_CodeModel = require('./Postal_Code')(sequelize, DataTypes);
const ReferralModel = require('./Referral')(sequelize, DataTypes);
const PaymentModel = require('./Payment')(sequelize, DataTypes);
const RegionModel = require('./Region')(sequelize, DataTypes);
const RentModel = require('./Rent')(sequelize, DataTypes);
const RoleModel = require('./Role')(sequelize, DataTypes);
const PaymentModelModel = require('./Payment')(sequelize, DataTypes);
const Room_HistoryModel = require('./Room_History')(sequelize, DataTypes);
const RoomModel = require('./Room')(sequelize, DataTypes);
const StorageModel = require('./Storage')(sequelize, DataTypes);
const StudentModel = require('./Student')(sequelize, DataTypes);
const Tenant_HistoryModel = require('./Tenant_History')(sequelize, DataTypes);
const TenantModel = require('./Tenant')(sequelize, DataTypes);
const UniversityModel = require('./University')(sequelize, DataTypes);

module.exports = {
    Tester, UserModel, DefaultModel, CourseModel, CountyModel, CountryModel, CompanyModel, CommentModel, 
    BookingModel, AgentModel, AdminModel, MaintenanceModel, LocationModel, LandlordModel, IssueModel,
    HouseModel, House_TypeModel, House_StatisticModel, GenderModel, House_TypeModel, FeedbackModel, 
    EvictionModel, EmployeeModel, DepositModel, House_RecordModel, UniversityModel, TenantModel,Tenant_HistoryModel, 
    StudentModel, StorageModel, RoomModel, RoomModel, Room_HistoryModel, PaymentModelModel, RoleModel, PaymentModelModel,
    RoleModel, RentModel, RegionModel, RegionModel, ReferralModel, Password_ResetModel, NationalityModel, PaymentModel
    // Postal_CodeModel, Marital_StatusModel
}




UserModel.hasMany(Tester, {
    foreignKey: 'user_id',
});
Tester.belongsTo(UserModel, {
    foreignKey: 'user_id'
});