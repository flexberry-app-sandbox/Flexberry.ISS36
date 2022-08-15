import { Serializer as InvestmentSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s36-investment';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(InvestmentSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
