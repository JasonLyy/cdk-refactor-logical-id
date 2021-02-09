import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as sqs from '@aws-cdk/aws-sqs';
import * as lambda from '@aws-cdk/aws-lambda';
import { CdkAnotherConstruct } from './cdk-another-construct';
import { Token } from '@aws-cdk/core';

export class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testNewConstuct = new CdkAnotherConstruct(this, 'AnotherConstruct');

    const mySqs = new sqs.Queue(this, 'my-new-sqs', {
      queueName: 'my-new-sqs'
    });
    
  }
}
