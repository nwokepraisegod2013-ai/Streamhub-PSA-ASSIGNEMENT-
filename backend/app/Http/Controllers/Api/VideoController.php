<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    /**
     * List videos, optionally filtered by category or a search term.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Video::query();

        if ($request->filled('category') && $request->string('category') !== 'All') {
            $query->where('category', $request->string('category'));
        }

        if ($request->filled('search')) {
            $term = '%'.$request->string('search').'%';
            $query->where(function ($q) use ($term) {
                $q->where('title', 'like', $term)
                    ->orWhere('description', 'like', $term);
            });
        }

        $videos = $query->orderByDesc('is_featured')
            ->orderByDesc('created_at')
            ->get();

        return response()->json([
            'data' => $videos,
        ]);
    }

    /**
     * Show a single video and bump its view count.
     */
    public function show(Video $video): JsonResponse
    {
        $video->increment('views');

        return response()->json([
            'data' => $video,
        ]);
    }

    /**
     * List the distinct categories available.
     */
    public function categories(): JsonResponse
    {
        $categories = Video::query()
            ->select('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return response()->json([
            'data' => $categories,
        ]);
    }
}
