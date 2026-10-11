<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'youtube_id',
        'category',
        'duration',
        'views',
        'is_featured',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'views' => 'integer',
    ];

    protected $appends = [
        'thumbnail_url',
        'embed_url',
        'watch_url',
    ];

    public function getThumbnailUrlAttribute(): string
    {
        return "https://img.youtube.com/vi/{$this->youtube_id}/hqdefault.jpg";
    }

    public function getEmbedUrlAttribute(): string
    {
        return "https://www.youtube.com/embed/{$this->youtube_id}";
    }

    public function getWatchUrlAttribute(): string
    {
        return "https://www.youtube.com/watch?v={$this->youtube_id}";
    }
}
