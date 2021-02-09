import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as sqs from '@aws-cdk/aws-sqs';
import * as lambda from '@aws-cdk/aws-lambda';

export class CdkAnotherConstruct extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);


    const mySqs = new sqs.Queue(this, 'my-new-sqs', {
      queueName: 'my-new-sqs'
    });
    (mySqs.node.defaultChild as sqs.CfnQueue).overrideLogicalId('mysqs8CC38581');
  }
}
