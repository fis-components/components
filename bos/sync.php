<?php
error_reporting(-1);
define('__BOS_CLIENT_ROOT', dirname(__DIR__));
date_default_timezone_set("Asia/Shanghai");
$ROOT = dirname(__DIR__)."/";

include 'BaiduBce.phar';

$config = array(
  'credentials' => array(
      'ak' => 'your ak token',
      'sk' => 'your sk token',
  ),
  'endpoint' => 'http://bj.bcebos.com',
);

$config['credentials']['ak'] = $argv[1];
$config['credentials']['sk'] = $argv[2];

$name = $argv[3];
$version = $argv[4];
$tarFile = $argv[5];
$jsonFile = $argv[6];

use BaiduBce\BceClientConfigOptions;
use BaiduBce\Util\Time;
use BaiduBce\Util\MimeTypes;
use BaiduBce\Http\HttpHeaders;
use BaiduBce\Services\Bos\BosClient;


$client = new BosClient($config);
$bucket = 'fis-cloud';

$bosDIR = "/components/".$name."/".$version."/";

$client->putObjectFromFile($bucket, $bosDIR."all.tar.gz", $ROOT.$tarFile);
$client->putObjectFromFile($bucket, $bosDIR."component.json", $ROOT.$jsonFile);


