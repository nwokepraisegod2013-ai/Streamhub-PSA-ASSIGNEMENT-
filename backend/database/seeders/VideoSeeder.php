<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Seed a handful of demo videos backed by public YouTube IDs.
     */
    public function run(): void
    {
        $videos = [
            [
                'title' => 'Big Buck Bunny',
                'description' => 'An open-source animated short by the Blender Foundation, following a gentle giant rabbit and the forest creatures who wrong him.',
                'youtube_id' => 'aqz-KE-bpKQ',
                'category' => 'Film',
                'duration' => '10:34',
                'views' => 15234,
                'is_featured' => true,
            ],
            [
                'title' => 'Sintel',
                'description' => 'A Blender Foundation open movie about a lonely girl named Sintel who cares for a baby dragon and searches for it after it is taken from her.',
                'youtube_id' => 'eRsGyueVLvQ',
                'category' => 'Film',
                'duration' => '14:48',
                'views' => 12890,
                'is_featured' => false,
            ],
            [
                'title' => 'Me at the Zoo',
                'description' => 'The very first video ever uploaded to YouTube, filmed at the San Diego Zoo in 2005.',
                'youtube_id' => 'jNQXAC9IVRw',
                'category' => 'Documentary',
                'duration' => '0:19',
                'views' => 302145,
                'is_featured' => false,
            ],
            [
                'title' => 'Never Gonna Give You Up',
                'description' => 'The iconic official music video from Rick Astley, a staple of internet culture.',
                'youtube_id' => 'dQw4w9WgXcQ',
                'category' => 'Music',
                'duration' => '3:33',
                'views' => 987654,
                'is_featured' => true,
            ],
            [
                'title' => 'Gangnam Style',
                'description' => 'The record-breaking official music video from PSY that became a global viral phenomenon.',
                'youtube_id' => '9bZkp7q19f0',
                'category' => 'Music',
                'duration' => '4:13',
                'views' => 845123,
                'is_featured' => false,
            ],
            [
                'title' => 'Despacito',
                'description' => 'The official music video for the chart-topping single by Luis Fonsi featuring Daddy Yankee.',
                'youtube_id' => 'kJQP7kiw5Fk',
                'category' => 'Music',
                'duration' => '4:41',
                'views' => 723890,
                'is_featured' => false,
            ],
            [
                'title' => 'Bohemian Rhapsody',
                'description' => 'The official music video from Queen for their genre-defying classic rock epic.',
                'youtube_id' => 'fJ9rUzIMcZQ',
                'category' => 'Music',
                'duration' => '5:59',
                'views' => 412765,
                'is_featured' => false,
            ],
            [
                'title' => 'See You Again',
                'description' => 'The official music video for Wiz Khalifa featuring Charlie Puth, a tribute track from the Furious 7 soundtrack.',
                'youtube_id' => 'RgKAFK5djSk',
                'category' => 'Music',
                'duration' => '3:58',
                'views' => 356421,
                'is_featured' => false,
            ],
        ];

        foreach ($videos as $video) {
            Video::query()->updateOrCreate(
                ['youtube_id' => $video['youtube_id']],
                $video
            );
        }
    }
}
