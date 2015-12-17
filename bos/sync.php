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
$versionsFile = $argv[7];

use BaiduBce\BceClientConfigOptions;
use BaiduBce\Util\Time;
use BaiduBce\Util\MimeTypes;
use BaiduBce\Http\HttpHeaders;
use BaiduBce\Services\Bos\BosClient;


$client = new BosClient($config);
$bucket = 'fis-cloud';

$bosDIR = "/components/".$name."/".$version."/";

deploy($bucket, $bosDIR."all.tar.gz", $ROOT.$tarFile);
deploy($bucket, $bosDIR."component.json", $ROOT.$jsonFile);
deploy($bucket, "/components/".$name."/versions.txt", $ROOT.$versionsFile);


function deploy($bucket, $src, $dest, $count = 0) {
  try {
    $client->putObjectFromFile($bucket, $src, $dest);
  } catch (Exception $e) {
    echo "Deloy Error ".$e->getMessage();

    // 重试两次
    if ($count < 2) {
      echo "Now retry...";
      sleep(2);
      deploy($bucket, $src, $dest, $count + 1);
    }
  }
}

